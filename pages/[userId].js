function UserIdPage({id}) {
    return <h1>{id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps({params}) {
    const userId = params.userId;

    return {
        props: {id: 'userId-' + userId},
    };
}
