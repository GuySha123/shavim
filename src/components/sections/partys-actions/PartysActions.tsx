import { PartyActions } from '../../../data/party-actions-data';
import ShavimLogoHeadingSecond from '../../logo/ShavimLogoHeadingSecond';
import {
    ActionsContent,
    ActionsPictures,
    ActionsTitleHeadingTwo,
    PartysActionsContainer,
    PartysActionsTitleContainer,
} from './PartysActions.styles';

type PartyActionsProps = {
    data: PartyActions[];
};

function PartysActions({ data }: PartyActionsProps) {
    return (
        <PartysActionsContainer>
            <PartysActionsTitleContainer>
                <ShavimLogoHeadingSecond />{' '}
                <ActionsTitleHeadingTwo>למען הקהילה</ActionsTitleHeadingTwo>
            </PartysActionsTitleContainer>

            {data.map((item, index) => (
                <ActionsContent key={index}>
                    <ActionsPictures
                        $image={item.actionPic}
                        title={`${item.alt}`}
                    />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </ActionsContent>
            ))}
        </PartysActionsContainer>
    );
}

export default PartysActions;
