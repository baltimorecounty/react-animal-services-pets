import { petFilter } from "./PetService";

describe("petFilter", () => {
  it("should return false if the petType is 'Other' but the pet is a Dog", () => {
    // arrange
    const petTypeFilter = "Other";
    const petType = "Dog";

    // act
    const actual = petFilter(petType, petTypeFilter);

    // assert
    expect(actual).toEqual(false);
  });

  it("should return false if the petType is 'Other' but the pet is a Cat", () => {
    // arrange
    const petTypeFilter = "Other";
    const petType = "Cat";

    // act
    const actual = petFilter(petType, petTypeFilter);

    // assert
    expect(actual).toEqual(false);
  });

  it("should return true if the petType is 'Other' but the pet is a Cat", () => {
    // arrange
    const petTypeFilter = "Other";
    const petType = "Beaver";

    // act
    const actual = petFilter(petType, petTypeFilter);

    // assert
    expect(actual).toEqual(true);
  });
});
