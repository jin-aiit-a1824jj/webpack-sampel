module.exports = api => {
    api.cache(true);

    return {
        "presets": [
            ["@babel/preset-env", {
                targets: [
                        "defaults",
                        "not IE 11",
                        "not IE_Mob 11",
                        "maintained node versions"
                ],
                useBuiltIns: "usage",
                corejs: 3
            }]
        ]
    }
}
