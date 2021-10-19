import { NavLink } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="MainFeed">
      {posts.map((post) => {
        let permalink = post.data.permalink;
        return (
          <div key={post.id}>
            <a href="">
              <h1>{post.data.title}</h1>
            </a>
            <p>
              {post.data.author} in {post.data.subreddit}
            </p>
            <p>
              <NavLink
                to={{
                  pathname: "/post",
                  state: { title: { permalink } },
                }}
              >
                Permalink: {post.data.permalink}
              </NavLink>
            </p>
          </div>
        );
      })}
    </div>
  );
}
