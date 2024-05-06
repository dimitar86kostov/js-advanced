function constructionCrew(params) {

    if (params.dizziness) {
        params.levelOfHydrated = 0.1 * weight * experience;
        params.dizziness = false;
    }

    return params;

}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)