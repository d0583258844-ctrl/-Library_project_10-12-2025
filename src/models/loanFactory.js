export function createLoan(id, bookId, memberId) {
  const Laon = {
    id,
    bookId,
    memberId,
    borrowDate: new Date(),
    dueDate: new Date(Date.now() + 12096e5),
    returnDate: null,
    isActive: true,
  };
}

export function returnLoan(loan) {
  (loan.returnDate = new Date()), (loan.isActive = false);
}

export function isLoanOverdue(loan) {
  return new Date() > loan.dueDate;
}

export function getDaysOverdue(loan) {
  return (new Date() - loan.dueDate) / 86400000;
}

export function getLateFee(loan, feePerDay) {
  return getDaysOverdue(loan) * feePerDay;
}

export function getDaysLoaned(loan) {
    return (new Date() - loan.borrowDate) / 86400000
}