export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async calls to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        console.log(profile);
        
        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project: project });
        }).catch((error) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", error: error });
        });
        dispatch({ type: "CREATE_PROJECT", project: project });
    }
}