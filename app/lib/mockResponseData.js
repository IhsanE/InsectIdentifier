import * as answerTypes from '../constants/AnswerTypes';

const mockAnswerObjectsMC = [
    {
        id: '00001',
        title: 'Red',
        image: null
    },
    {
        id: '00002',
        title: 'Yellow',
        image: null
    },
    {
        id: '00003',
        title: 'Blue',
        image: null
    },
    {
        id: '00004',
        title: 'Green',
        image: null
    },
    {
        id: '00005',
        title: 'Purple',
        image: null
    },
    {
        id: '00006',
        title: 'Brown',
        image: null
    },
    {
        id: '00007',
        title: 'Black',
        image: null
    },
    {
        id: '00008',
        title: 'Orange',
        image: null
    },
];

const mockAnswerObjectsMCImages = [
    {
        id: '00010',
        title: 'Answer A',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png'
    },
    {
        id: '00011',
        title: 'Answer B',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png'
    }
];

const mockAnswerObjectShortAnswer = [
    {
        id: '00009',
        title: 'Enter some short text',
        image: null
    }
];

export const mockQuestionObjectMC = {
    id: '00001',
    image: 'http://xpagexplorer.org/unicornwpfolder/wp-content/uploads/scared-bug.jpg',
    title: 'Q1. Which color most accurately describes the insect?',
    description: 'The insect may have many different colours on its body, however for the purpose of this question, try and identify the most dominant color associated with the insect.',
    num_answers: 8,
    answers: [mockAnswerObjectsMC],
    answer_type: answerTypes.MULTIPLE_CHOICE
};

export const mockQuestionObjectMC2 = {
    id: '00002',
    title: 'I am a test question where the answers have images?',
    description: 'sjlfhsdfhksjdhjkfhdsjkhfjkshdfjks',
    num_answers: 2,
    answers: [mockAnswerObjectsMCImages],
    answer_type: answerTypes.MULTIPLE_CHOICE
};

export const mockQuestionObjectShortAnswer = {
    id: '00003',
    title: 'I am a test question where you type a short answer?',
    description: 'sjlfhsdfhksjdhjkfhdsjkhfjkshdfjks',
    num_answers: 1,
    answers: [mockAnswerObjectShortAnswer],
    answer_type: answerTypes.SHORT_ANSWER
};

export const mockQuestionObjectIdentificationSuccessOrFailure = {
    id: '00003',
    title: 'Success!',
    description: 'You have successfully identified your bug, it\'s a spider. <a href=\"https://en.wikipedia.org/wiki/Spider\">Wikipedia</a>',
    num_answers: 0,
    answers: [],
    answer_type: answerTypes.MULTIPLE_CHOICE
};

export const mockGetFirstQuestionResponse = {
    sessionID: '028934902834092131JKH$@#',
    question: mockQuestionObjectMC
};
