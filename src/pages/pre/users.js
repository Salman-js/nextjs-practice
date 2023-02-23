function UsersList({ users }) {
  return (
    <>
      <p className='text-2xl font-bold'>List of Users</p>
      {users.map((user, index) => {
        return (
          <p key={index} className='text-lg font-bold'>
            {user.name}
          </p>
        );
      })}
    </>
  );
}

export default UsersList;
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: { users: data },
  };
}
