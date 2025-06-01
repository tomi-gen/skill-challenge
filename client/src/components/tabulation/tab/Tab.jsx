import { useEffect } from "react";

function Tab({ onClickAction, tabSelected, children, tabPosition }) {
  useEffect(() => {}, [tabSelected]);
  return (
    <button
      onClick={onClickAction}
      className={
        tabSelected == tabPosition
          ? ""
          : `tab-not-selected ${
              tabSelected + 1 == tabPosition
                ? "post-border"
                : tabSelected - 1 == tabPosition
                ? "pre-border"
                : ""
            }`
      }
    >
      {children}
    </button>
  );
}

export default Tab;
