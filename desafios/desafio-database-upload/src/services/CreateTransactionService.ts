import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import { getCustomRepository, getRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';

interface Request {
  title: string,
  value: number,
  type: 'income' | 'outcome',
  category: string
}

class CreateTransactionService {
  public async execute({ title, value, type, category }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getRepository(Category);

    if (type === 'outcome') {
      const { total } = await transactionsRepository.getBalance();

      if (total < value) {
        throw new AppError("You don't have amount to make this transaction", 400);
      }
    }

    let transactionCategory = await categoryRepository.findOne({
      where: {
        title: category
      }
    });

    if (!transactionCategory) {
      transactionCategory = categoryRepository.create({
        title: category
      });

      await categoryRepository.save(transactionCategory);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: transactionCategory
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
