/**
 * Interface for objects that deal with (un)marshalling data.
 */
export interface ValueTransformer<E = unknown, R = unknown> {
  /**
   * Used to marshal data when writing to the database.
   */
  to(value: E): R;
  /**
   * Used to unmarshal data when reading from the database.
   */
  from(value: R): E;
}
