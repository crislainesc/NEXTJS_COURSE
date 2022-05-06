function UserProfilePage({userName}) {
    return <h1>{userName}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps({params, req, res}) {
    console.log('req', req);
    console.log('res', res);

    return {
        props: {
            userName: 'Max',
        },
    };
}
