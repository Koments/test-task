import { useEffect, useState } from 'react';

import { PostRequestStyles, FormContainer, PersonalInfoContailer, InputContainer, FlexColumn, LabelPhone, PositionTitle, RadioBtnsContainer, UploadFilesContainer, UploadLabel, UploadBtn, UploadFileName, PostBtn, PostBtnContainer } from "./styled-components"

import { postUser } from '../../utils/utijs';

export function PostRequest() {

    const [positions, setPosition] = useState([]);

    const [positionsUser, setPositionUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phonelUser, setPhoneUser] = useState('');

    const [file, setFile] = useState({});


    async function positionJSON() {
        const response = await fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
        );
        const result = await response.json();
        return result;
    }

    useEffect(() => {
        positionJSON().then((result) => {
            setPosition(result.positions)
        });
    }, []);

    console.log(positions)

    return (
        <PostRequestStyles>
            <h2>Working with POST request</h2>
            <form action="" method="post">
                <FormContainer>
                    <PersonalInfoContailer>
                        <InputContainer>
                            <input type="text" name="name" placeholder="Your name" onChange={event => setNameUser(event.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <input type="text" name="email" placeholder="Email" onChange={event => setEmailUser(event.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <FlexColumn>
                                <input type="text" name="phone" placeholder="Phone" onChange={event => setPhoneUser(event.target.value)} />
                                <LabelPhone htmlFor="phone">+38 (XXX) XXX - XX - XX</LabelPhone>
                            </FlexColumn>
                        </InputContainer>
                    </PersonalInfoContailer>
                    <div>
                        <PositionTitle>Select your position</PositionTitle>
                        {positions.map((position, index) => (
                            <RadioBtnsContainer key={index}>
                                <input type="radio" id={position.id} name="position" onChange={e => setPositionUser(e.target.id)} />
                                <div htmlFor={'radio-btn-' + position.name}>{position.name}</div>
                            </RadioBtnsContainer>
                        ))}
                    </div>
                    <UploadFilesContainer>
                        <UploadBtn>
                            <UploadLabel htmlFor="filePicker">
                                Upload
                            </UploadLabel>
                            <input id="filePicker" className="upload-btn" type="file" onChange={e => setFile(e.target.files[0])} />
                        </UploadBtn>
                        <UploadFileName>{file.name ?? 'Upload your photo'}</UploadFileName>
                    </UploadFilesContainer>
                    <PostBtnContainer><PostBtn type='button' onClick={() => postUser(positionsUser, nameUser, emailUser, phonelUser, file)}>Sign up</PostBtn></PostBtnContainer>
                </FormContainer>
            </form>
        </PostRequestStyles>
    );
}