from flask import Flask, request, jsonify,render_template
from google.cloud import dialogflow
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'service_key.json' 

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def main():
     
    return 'Please add user id at the end of the url'

@app.route('/<int:id>', methods=['GET'])
def home(id):
    session_client = dialogflow.SessionsClient()
    PROJECT_ID = 'hotel-book-2d76a'
    session_id = id
    session_path = session_client.session_path(PROJECT_ID, session_id)

    # Create a Delete Context request
    delete_context_request = dialogflow.DeleteContextRequest(name=session_path)

    # Delete the context
    session_client.delete_context(request=delete_context_request)

    return render_template('index.html',id=id)

@app.route('/chatbot', methods = ['POST'])
def chatbot():
    try:
        user_message = request.json
        id = request.args.get('id')
        response = detect_intent(id,user_message)
        return jsonify({
            "result":response
        })
    except Exception as e:
        print(e)

def detect_intent(user_id, user_message):
    session_client = dialogflow.SessionsClient()
    PROJECT_ID = 'hotel-book-2d76a'
    session_id = user_id
    session_path = session_client.session_path(PROJECT_ID, session_id)

    # Create a Delete Context request
    # delete_context_request = dialogflow.DeleteContextRequest(name=context_path)

    # Delete the context
    # session_client.delete_context(request=delete_context_request)

    text_input = dialogflow.TextInput(text=user_message, language_code='en-US')
    query_input = dialogflow.QueryInput(text=text_input)

    response = session_client.detect_intent(session=session_path, query_input=query_input)
    # print(response)
    print(response.query_result.fulfillment_text)
    return response.query_result.fulfillment_text


if __name__ == '__main__':
    app.run(debug=True,port=5000,host='0.0.0.0')