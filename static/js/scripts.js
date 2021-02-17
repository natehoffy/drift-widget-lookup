
function getOrgDetails(embedId) {
    $.getJSON("https://embeds.driftcdn.com/embeds/"+ embedId + ".json", function(data) {
        var driftOrg = '';
        var org_id = data.orgId
        var campaigns = data.configuration.campaigns
        if(campaigns.length < 1) {
            campaigns = "null"
        }
        var audience = data.configuration.theme.audience
        var urlWhitelist = data.configuration.theme.urlWhitelist
        if(urlWhitelist.length < 1) {
            urlWhitelist = "null"
        }
        var cookieDomains = data.configuration.theme.cookieDomains
        var organizationName = data.configuration.organizationName

        driftOrg += '<tr>';
        driftOrg += '<td>' + org_id + '</td>';
        driftOrg += '<td>' + organizationName + '</td>';
        driftOrg += '<td>' + campaigns + '</td>'
        driftOrg += '<td>' + audience + '</td>'
        driftOrg += '<td>' + urlWhitelist + '</td>'
        driftOrg += '<td>' + cookieDomains + '</td>'
        driftOrg += '</tr>';

        $('#table').append(driftOrg);

    });
};
