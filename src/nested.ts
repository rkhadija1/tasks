import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Q from "q";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newArrQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return newArrQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );

    if (foundQuestion === undefined) {
        return null;
    }

    return foundQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const wrongIdQuestion = questions.filter(
        (question: Question): boolean => question.id !== id
    );

    return wrongIdQuestion;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionWithOnlyNames = questions.map(
        (question: Question): string => question.name
    );
    return questionWithOnlyNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (_currentPoints: number, question: Question) =>
            _currentPoints + question.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalPublishedQuestions = questions
        .filter((question: Question) => question.published)
        .reduce(
            (_currentTotal: number, question: Question) =>
                _currentTotal + question.points,
            0
        );
    return totalPublishedQuestions;
}
/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const questionsCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return header + questionsCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublishedQuestions = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return allPublishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const firstType = questions[0].type;
    return questions.every((question) => question.type === firstType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const addedQuestion = [...questions, makeBlankQuestion(id, name, type)];

    return addedQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const questionWithTargetId: Question[] = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, name: newName }
                : { ...question }
    );
    return questionWithTargetId;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copyOfQuestion: Question[] = [...questions];
    const element = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    if (element === undefined) {
        return copyOfQuestion;
    }
    const elementIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (
        element.type === "multiple_choice_question" &&
        newQuestionType !== "multiple_choice_question"
    ) {
        const question1 = { ...element, options: [], type: newQuestionType };
        copyOfQuestion.splice(elementIndex, 1, question1);
    } else {
        const question2 = { ...element, type: newQuestionType };
        copyOfQuestion.splice(elementIndex, 1, question2);
    }
    return copyOfQuestion;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const cpQuestions: Question[] = [...questions];
    const element = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    if (element === undefined) {
        return cpQuestions;
    }
    const elementIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (targetOptionIndex === -1) {
        const question1 = {
            ...element,
            options: [...element.options, newOption]
        };
        cpQuestions.splice(elementIndex, 1, question1);
    } else {
        const question2 = { ...element, options: [...element.options] };
        question2.options.splice(targetOptionIndex, 1, newOption);
        cpQuestions.splice(elementIndex, 1, question2);
    }
    return cpQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copyQuestion: Question[] = [...questions];
    const element = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    if (element === undefined) {
        return copyQuestion;
    }
    const elementIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const newQuestion = duplicateQuestion(newId, element);
    copyQuestion.splice(elementIndex + 1, 0, newQuestion);

    return copyQuestion;
}
