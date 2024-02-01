import { Spinner } from 'react-bootstrap';
import { LoadingContainer } from './Loading.styles';

export default function Loading() {
    return (
        <LoadingContainer>
            <Spinner animation='border' variant='primary' role='status'>
                <span className='visually-hidden'>טוען...</span>
            </Spinner>
        </LoadingContainer>
    );
}
