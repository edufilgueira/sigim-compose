import { cloneDeep } from "lodash";

class UndoState {
  store;
  stateCloned;

  init(store) {
    this.store = store;
  }

  addState(state) {
    this.stateCloned = state;
  }

  undoState() {
    this.store.replaceState(cloneDeep(this.stateCloned));
  }
}

export const undoState = new UndoState();
