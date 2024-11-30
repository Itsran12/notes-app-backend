import {addNoteHandler, getNotesHandler, getNotesByIdHandler, updateNoteHandler, deleteNoteHandler} from "./handler.js"

export const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: "GET",
        path: "/notes",
        handler: getNotesHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNotesByIdHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: "PUT",
        path: "/notes/{id}",
        handler: updateNoteHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: "DELETE",
        path: "/notes/{id}",
        handler: deleteNoteHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    }
]