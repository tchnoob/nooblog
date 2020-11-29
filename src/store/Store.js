import { makeObservable, action, observable } from "mobx";
import { boundClass } from "autobind-decorator";
import _ from "lodash";

const Store = boundClass(
  class {
    title = "";
    menuVisible = true;

    constructor() {
      this.onScroll = _.debounce((e) => {
        if (this.menuVisible) {
          this.menuVisible = false;
        } else if (e.target.scrollTop === 0) {
          this.menuVisible = true;
        }
        console.log("@onScroll", e, this.menuVisible);
      }, 33);
      makeObservable(this, {
        title: observable,
        menuVisible: observable,
      });
    }

    setTitle(title) {
      this.title = title;
      console.log("@setTitle", this.title);
    }

    toggleMenuView() {
      this.menuVisible = !this.menuVisible;
      console.log("@toggleMenuView", this.menuVisible);
    }
  }
);

const store = new Store();
export default Store;
export { store };
