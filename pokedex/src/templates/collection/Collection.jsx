import { useDispatch, useSelector } from 'react-redux';
import { CollectionContainer } from './CollectionContainer';
import { deletePokemon } from '../../redux/pokemon/pokemon.actions';
import Swal from 'sweetalert2';

const Collection = () => {
    const dispatch = useDispatch();
    const pokemonPersist = useSelector((state) => state.pokemon);
    const { pokemonsCollection, lastAdded } = pokemonPersist;

    const deleteCollection = () => {
        Swal.fire({
            title: '¿Quieres eliminar todos los elementos?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePokemon());
                Swal.fire('Eliminados', 'Los elementos han sido eliminados.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelado', 'La eliminación ha sido cancelada.', 'error');
            }
        });
    };

    return <CollectionContainer pokemonsCollection={pokemonsCollection} deleteCollection={deleteCollection} lastAdded={lastAdded} />;
};

export default Collection;
