import ShavimLogoHeadingSecond from '../../logo/ShavimLogoHeadingSecond';
import {
    HeadPartyWordsContentContainer,
    PartysValueContaner,
    ValueHeading,
    ValueInfo,
} from './Introduction.styles';
import shavimData from '../../../data/shavim-value.json';

type ValueText = {
    'value-name': string;
    text: string;
};

type IntroductionProps = {
    data: ValueText[];
};

const Introduction = ({ data = shavimData }: IntroductionProps) => {
    return (
        <HeadPartyWordsContentContainer>
            {data.map((item, index) => (
                <ValueInfo key={index}>
                    <PartysValueContaner>
                        <ShavimLogoHeadingSecond />{' '}
                        <ValueHeading>{item['value-name']}</ValueHeading>
                    </PartysValueContaner>
                    <p>{item.text}</p>
                </ValueInfo>
            ))}
        </HeadPartyWordsContentContainer>
    );
};

export default Introduction;
