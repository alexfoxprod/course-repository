import React from "react";

function sum(n) {
  return n - 1 + 1;
}

function Post({ title, name, email, body }) {
  const [num, setNum] = React.useState(0);
  const [isGreen, setIsGreen] = React.useState(false);
  const countSum = React.useMemo(() => sum(num), [num]);
  return (
    <div className="article-content">
      <div className="article-title">
        <a>{title}</a>
        <p>{name}</p>
      </div>
      <p
        className="article-text"
        style={{ color: isGreen ? "green" : "red" }}
        onClick={() => setIsGreen(!isGreen)}
      >
        {body} {email}
      </p>
      {countSum}
      <button className="like-count" onClick={() => setNum(num + 1)}>
        👍
      </button>
    </div>
  );
}

export default React.memo(Post);
