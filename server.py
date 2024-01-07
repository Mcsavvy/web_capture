"""A Socketio server to accept clips from the frontend"""

from aiohttp import web
import socketio

sio = socketio.AsyncServer(cors_allowed_origins=['http://localhost:1234'])
app = web.Application()
sio.attach(app)

@sio.on('connect')
def connect(sid, environ):
    print('connect ', sid)

@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('clip')
async def clip(sid, timestamp, blob):
    # create a file with the timestamp as the name
    # save the blob to the file
    # send the file to the model
    # send the result back to the frontend
    
    with open(f'./{timestamp}.mp4', 'wb') as f:
        f.write(blob)
    print('clip ', timestamp)
    sio.emit('result', "Got it!")


if __name__ == '__main__':
    web.run_app(app)