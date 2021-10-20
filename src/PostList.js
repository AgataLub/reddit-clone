import { NavLink } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="MainFeed">
      {posts.map((post) => {
        const { title, author, subreddit, permalink } = post.data;
        // let permalink = post.data.permalink;
        return (
          <div className="SinglePost" key={post.id}>
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
                See the comments...
              </NavLink>
            </p>
          </div>
        );
      })}
    </div>
  );
}
