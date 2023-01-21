import React from 'react';

const AssemblyItems = ({
  stage,
  i,
  val,
  mouse,
  handleRightClick,
  handleLeftClick,
}) => {
  return (
    <>
      <div className="assembly-stage" key={i}>
        <h5>{stage}</h5>
        {val &&
            val
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((s) => {
                if (s.index === i) {
                  return (
                    <button
                      className="assembly-item"
                      type="button"
                      key={s.id}
                      onContextMenu={(e) => handleRightClick(e, s.id, s.index)}
                      onClick={() => handleLeftClick(s.id, s.index)}
                    >
                      {s.msg}
                    </button>
                  );
                }
              })
          }
      </div>
    </>
  );
};

export default AssemblyItems;
