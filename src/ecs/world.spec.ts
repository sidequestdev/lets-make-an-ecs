describe("World", () => {
  describe("createEntity()", () => {
    it.todo("returns a new entity id");
  });

  describe("removeEntity()", () => {
    it.todo("should remove an existing entity and return true");

    it.todo("should return false if entity does not exist");
  });

  describe("addEntityComponents()", () => {
    it.todo("should add components to entity component map");

    it.todo("should allow adding multiple components to entity component map");

    it.todo("should not throw an error if an entity does not exist");
  });

  describe("getEntityComponents()", () => {
    it.todo("should return ComponentMap for existing entity");

    it.todo("should return undefined for non-existing entity");
  });

  describe("view()", () => {
    it.todo("should return the correct views");
  });

  describe("systems", () => {
    it.todo("can add systems");

    it.todo("can remove systems");

    it.todo("should update systems in insertion order");
  });
});
