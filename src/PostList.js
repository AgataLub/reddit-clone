export default function PostList({ posts }) {
  return (
    <div className="MainFeed">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <a href="">
              <h1>{post.data.title}</h1>
            </a>
            <p>
              {post.data.author} in {post.data.subreddit}
            </p>
            <p>Permalink: {post.data.permalink}</p>
          </div>
        );
      })}
    </div>
  );
}
