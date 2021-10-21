import { NavLink } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="MainFeed">
      {posts.map((post) => {
        const { title, author, subreddit, permalink, id } = post.data;
        return (
          <div key={id} className="SinglePost">
            <h1>{title}</h1>
            <p>
              {author} in {subreddit}
            </p>
            <p>
              <NavLink
                to={{
                  pathname: "/post",
                  state: { title: { permalink } },
                }}
              >
                <button>See the comments...</button>
              </NavLink>
            </p>
          </div>
        );
      })}
    </div>
  );
}
