import { NavLink } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <div className="MainFeed">
      {posts.map((post) => {
        let permalink = post.data.permalink;
        return (
          <div key={post.data.id} className="SinglePost">
            <h1>{post.data.title}</h1>
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
                See the comments...
              </NavLink>
            </p>
          </div>
        );
      })}
    </div>
  );
}
