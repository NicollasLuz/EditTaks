import React, { useState } from 'react';
import Card from "../../components/Card"
import Container from '../../components/Container' 



function Tarefas({tarefa, onEdit, onDelete}){
    const [editingId, setEditingId] = useState(null);

    const handleEdit = (contact) => {
        if (editingId === contact.id) {
        // Save the edited contact
        onEdit(contact);
        setEditingId(null);
        } else {
        setEditingId(contact.id);
        }
    };

    return (
        <Container>
            <Card
                titulo={"maro"}
                afazer={"limparoooooooooooooooooooooooo"}
            />
        </Container>
    
    );
}


export default Tarefas