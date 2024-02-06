import { ValueText } from '../../../data/shavim-value';
import ShavimLogoHeadingSecond from '../../logo/ShavimLogoHeadingSecond';
import {
    HeadPartyWordsContentContainer,
    PartysValueContainer,
    ValueHeading,
    ValueInfo,
} from './Introduction.styles';

type IntroductionProps = {
    data: ValueText[];
};

const Introduction = ({ data }: IntroductionProps) => {
    return (
        <HeadPartyWordsContentContainer>
            {data.map((item, index) => (
                <ValueInfo key={index}>
                    <PartysValueContainer title={item.title}>
                        <ShavimLogoHeadingSecond />{' '}
                        <ValueHeading>{item['value-name']}</ValueHeading>
                    </PartysValueContainer>
                    <p>{item.text}</p>
                </ValueInfo>
            ))}
        </HeadPartyWordsContentContainer>
    );
};

export default Introduction;
