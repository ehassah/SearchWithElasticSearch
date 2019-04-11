$(document).ready(function () {

    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "AmericanSamoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua&Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria"];

    $('#txtSerach').autocomplete({
        source: countries
    });
});