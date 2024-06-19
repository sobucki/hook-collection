import { Position, TableSize } from "../../common/types";

export type useFoodProps = TableSize & {
  occupiedPositions: Position[];
};
