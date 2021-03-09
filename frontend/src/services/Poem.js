const BACKEND_URL = 'http://localhost:3000';

const PoemService = {
    fetchPoems: async function() {
        const res = await fetch(`${BACKEND_URL}/poem`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (res.ok) {
            this.addToast('Poems fetched successfully!', {
                appearance: 'success',
                autoDismiss: true
            });
            const body = await res.json();
            return body.data.poems;
        }
        else {
            this.addToast(`${res.status ? res.status : 'Error fetching poems.'} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
            return null;
        }
    },

    addPoem: async function(poem) {
        const res = await fetch(`${BACKEND_URL}/poem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(poem)
        });
        if (res.ok) {
            this.addToast('Poem posted successfully!', {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else {
            this.addToast(`${res.status ? res.status : 'Error posting poem.'} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    },

    updatePoem: async function(update, id) {
        const res = await fetch(`${BACKEND_URL}/poem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        });
        if (res.ok) {
            this.addToast(`Poem with id ${id} updated successfully!`, {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else {
            this.addToast(`${res.status ? res.status : `Error updating poem with id ${id}.`} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    },

    deletePoem: async function(id) {
        const res = await fetch(`${BACKEND_URL}/poem/${id}`, {
            method: 'delete'
        });
        if (res.ok) {
            this.addToast(`Poem with id ${id} deleted successfully!`, {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else {
            this.addToast(`${res.status ? res.status : `Error deleting poem with id ${id}.`} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    }
};
export default PoemService;