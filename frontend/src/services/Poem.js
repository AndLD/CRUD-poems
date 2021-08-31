const BACKEND_URL = 'http://localhost:3000';

const PoemService = {
    // Получение стихов
    fetchPoems: async function() {
        const res = await fetch(`${BACKEND_URL}/poem`, {
            headers: {
                'Accept': 'application/json'
            }
        }).catch(err => {
            this.addToast(`Error fetching poems. ${err}`, {
                appearance: 'error',
                autoDismiss: true
            });
        });
        if (res && res.ok) {
            // this.addToast('Poems fetched successfully!', {
            //     appearance: 'success',
            //     autoDismiss: true
            // });
            const body = await res.json();
            return body.data.poems;
        }
        else if (res) {
            this.addToast(`${res.status ? res.status : 'Error fetching poems.'} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
            return null;
        }
    },
    // Добавление стиха
    addPoem: async function(poem) {
        const res = await fetch(`${BACKEND_URL}/poem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(poem)
        }).catch(err => {
            this.addToast(`Error posting poem. ${err}`, {
                appearance: 'error',
                autoDismiss: true
            });
        });
        if (res && res.ok) {
            this.thenActivity();

            this.addToast('Poem posted successfully!', {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else if (res) {
            this.addToast(`${res.status ? res.status : 'Error posting poem.'} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    },
    // Редактирование стиха
    updatePoem: async function(update, id) {
        const res = await fetch(`${BACKEND_URL}/poem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        }).catch(err => {
            this.addToast(`Error updating poem. ${err}`, {
                appearance: 'error',
                autoDismiss: true
            });
        });
        if (res && res.ok) {
            this.thenActivity();

            this.addToast(`Poem with id ${id} updated successfully!`, {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else if (res) {
            this.addToast(`${res.status ? res.status : `Error updating poem with id ${id}.`} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    },
    // Удаление стиха
    deletePoem: async function(id) {
        const res = await fetch(`${BACKEND_URL}/poem/${id}`, {
            method: 'delete'
        }).catch(err => {
            this.addToast(`Error deleting poem. ${err}`, {
                appearance: 'error',
                autoDismiss: true
            });
        });
        if (res && res.ok) {
            this.thenActivity();

            this.addToast(`Poem with id ${id} deleted successfully!`, {
                appearance: 'success',
                autoDismiss: true
            });
        }
        else if (res) {
            this.addToast(`${res.status ? res.status : `Error deleting poem with id ${id}.`} ${res.statusText}`, {
                appearance: 'error',
                autoDismiss: true
            });
        }
        return null;
    }
};
export default PoemService;