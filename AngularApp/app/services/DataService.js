
app.service("DataService", function () {
    this.getWorkers = function () {
        return [
            {
                nom: 'amine',
                prenom: 'jen'
            },
            {
                nom: 'amine2',
                prenom: 'jen2'
            },
            {
                nom: 'amine3',
                prenom: 'jen3'
            }
        ];
    }
});