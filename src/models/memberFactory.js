import { Members } from "../data/storage.js";
export function createMember(id, name, email, phone) {
  const Member = {
    id,
    name,
    email,
    phone,
    joinDate: new Date(),
    activeLoans: [],
    loanHistory: [],
  };
  return Member;
}

export function canMemberBorrow(member) {
  if (Members.includes(member)) {
    return true;
  } else {
    return false;
  }
}

export function addActiveLoan(member, loanId) {
  return member.activeLoans.push(loanId), member.loanHistory.push(loanId);
}

export function removeActiveLoan(member, loanId) {
  return member.activeLoans.splice(member.activeLoans.indexOf(loanId), 1);
}

export function getTotalBooksRead(member) {
    return member.loanHistory.lebgth
}

