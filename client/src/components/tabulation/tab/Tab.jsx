import { useEffect } from "react";

function Tab({ onClickAction, tabSelected, children, tabPosition }) {
  useEffect(() => {}, [tabSelected]);
  return (
    <button
      onClick={onClickAction}
      className={tabSelected == tabPosition ? "" : "tab-not-selected"}
    >
      {children}
    </button>
  );
}

export default Tab;
