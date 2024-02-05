import ShavimLogoHeadingSecond from '../../logo/ShavimLogoHeadingSecond';
import {
    ActionsContent,
    ActionsPictures,
    ActionsTitleHeadingTwo,
    PartysActionsContainer,
    PartysActionsTitleContainer,
} from './PartysActions.styles';

function PartysActions() {
    return (
        <PartysActionsContainer>
            <PartysActionsTitleContainer>
                <ShavimLogoHeadingSecond />{' '}
                <ActionsTitleHeadingTwo>למענכם</ActionsTitleHeadingTwo>
            </PartysActionsTitleContainer>
            <ActionsContent>
                <ActionsPictures title={`example1`} />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta culpa quis officia, corporis voluptatum ipsam facere
                    fuga. Eos reprehenderit laboriosam in temporibus! At
                    architecto amet assumenda error, ducimus porro, quidem
                    commodi, dolore consequatur recusandae perspiciatis minima
                    sed! Alias eum atque sed, pariatur sunt commodi quam magnam
                    ut blanditiis assumenda vero!
                </p>
            </ActionsContent>
            <ActionsContent>
                <ActionsPictures title={`example1`} />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta culpa quis officia, corporis voluptatum ipsam facere
                    fuga. Eos reprehenderit laboriosam in temporibus! At
                    architecto amet assumenda error, ducimus porro, quidem
                    commodi, dolore consequatur recusandae perspiciatis minima
                    sed! Alias eum atque sed, pariatur sunt commodi quam magnam
                    ut blanditiis assumenda vero!
                </p>
            </ActionsContent>
        </PartysActionsContainer>
    );
}

export default PartysActions;
