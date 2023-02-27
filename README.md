# incidents_report
API Documentation:

API endpoint: https://incidents-report-api.onrender.com/api/v1/incidents

This endpoint is a RESTful API that allows users to retrieve and create incident reports.

METHOD:

GET: Retrieves a list of all incident reports.
POST: Creates a new incident report.

Request Header:
Content-Type: application/json

RESPONSE:

GET: Returns a JSON array of all incident reports.
POST: Returns the newly created incident report as a JSON object.

FIELDS FOR INCIDENT REPORTS:

client_id(INTEGER): id of client
incident_desc (TEXT): title & description of the incident report
city (TEXT): city of incident
country (TEXT): country of incident

EXAMPLE : Adding Incident using JSON Format

{
        "client_id": 126345,
        "incident_desc": "Traffic Jam",
        "city": "cairo",
        "country": "Egypt"
}

