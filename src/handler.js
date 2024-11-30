import { nanoid } from "nanoid"
import { notes } from "./notes.js"

export const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload

    const id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = {
        id, title, tags, body, createdAt, updatedAt
    }

    notes.push(newNote)

    const isSuccess = notes.filter((note) => note.id === id).length > 0

    if(isSuccess) {
        const response = h.response({
            status: "success",
            message: "Berhasil membaut data",
            data: {
                noteId: id
            }
        })
        response.code(201)
        return response
    }

    const response = h.res({
        status: "fail",
        message: "Gagal membaut data",
    })
    response.code(500)
    return response
}

export const getNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    }
})

export const getNotesByIdHandler = (request, h) => {
    const { id } = request.params
    const note = notes.find((n) => n.id === id)

    if (note) {
        return h.response({
            status: "success",
            data: {
                note
            }
        })
    }

    const response = h.response({
        status: "fail",
        message: "Catatan tidak ditemukan",
    })
    response.code(404)
    return response
}

export const updateNoteHandler = (request, h) => {
    const {id} = request.params
    const {title, tags, body} = request.payload
    const updatedAt = new Date().toISOString()
    const index = notes.findIndex((note) => note.id === id)
    if(index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        }
        const response = h.response({
            status: "success",
            message: "Berhasil mengubah data",
        })
        response.code(201)
        return response
    }

    const response = h.response({
        status: "fail",
        message: "Data notes tidak ditemukan",
    })
    response.code(401)
    return response
}

export const deleteNoteHandler = (request, h) => {
    const {id} = request.params
    const index = notes.findIndex((note) => note.id === id)
    if(index !== -1) {
        notes.splice(index, 1)
        const response = h.response({
            status: "success",
            message: "Berhasil menghapus data",
        })
        response.code(201)
        return response
    }

    const response = h.response({
        status: "fail",
        message: "Data notes tidak ditemukan",
    })
    response.code(401)
    return response
}