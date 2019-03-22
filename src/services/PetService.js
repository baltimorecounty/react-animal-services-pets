const petFilter = (petType, petTypeFilter) =>
  petTypeFilter === "Other"
    ? ["Cat", "Dog"].indexOf(petType) === -1
    : petType &&
      petTypeFilter &&
      petTypeFilter.toLowerCase() === petType.toLowerCase();

export { petFilter };
