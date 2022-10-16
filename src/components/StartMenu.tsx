import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export interface StartMenuProps {
    theme?: Theme;
    numOfPlayers?: NumOfPlayers;
    gridSize?: GridSize;
}

export interface StartMenuState {
    selectedTheme: Theme;
    selectedNumOfPlayers: NumOfPlayers;
    selectedGridSize: GridSize;
}

export type Theme = 'numbers' | 'icons';
export type NumOfPlayers = 1 | 2 | 3 | 4;
export type GridSize = '4x4' | '6x6';

export default function StartMenu(props: StartMenuProps, state: StartMenuState) {
    let navigate = useNavigate();

    const [selectedTheme, setSelectedTheme] = useState('');
    const [selectedNumOfPlayers, setSelectedNumOfPlayers] = useState(0);
    const [selectedGridSize, setSelectedGridSize] = useState('');

    return (
        <div className="start-menu-container">
            <div className="select-theme">
                <h2>Select Theme</h2>
                <Button
                    title="Numbers"
                    onClickHandler={() => setSelectedTheme('numbers')}
                    color={selectedTheme === 'numbers' ? 'active' : ''}
                />
                <Button
                    title="Icons"
                    onClickHandler={() => setSelectedTheme('icons')}
                    color={selectedTheme === 'icons' ? 'active' : ''}
                />
            </div>
            <div className="select-number-ofplayers">
                <h2>Number of Players</h2>
                <Button
                    title="1"
                    onClickHandler={() => setSelectedNumOfPlayers(1)}
                    color={selectedNumOfPlayers === 1 ? 'active' : ''}
                />
                <Button
                    title="2"
                    onClickHandler={() => setSelectedNumOfPlayers(2)}
                    color={selectedNumOfPlayers === 2 ? 'active' : ''}
                />
                <Button
                    title="3"
                    onClickHandler={() => setSelectedNumOfPlayers(3)}
                    color={selectedNumOfPlayers === 3 ? 'active' : ''}
                />
                <Button
                    title="4"
                    onClickHandler={() => setSelectedNumOfPlayers(4)}
                    color={selectedNumOfPlayers === 4 ? 'active' : ''}
                />
            </div>
            <div className="select-grid-size">
                <h2>Grid Size</h2>
                <Button
                    title="4x4"
                    onClickHandler={() => setSelectedGridSize('4x4')}
                    color={selectedGridSize === '4x4' ? 'active' : ''}
                />
                <Button
                    title="6x6"
                    onClickHandler={() => setSelectedGridSize('6x6')}
                    color={selectedGridSize === '6x6' ? 'active' : ''}
                />
            </div>
            <div className="start-menu-actions">
                <Button title="Start Game" onClickHandler={() => {
                    navigate('board', {
                        state: {
                            selectedTheme: selectedTheme,
                            selectedNumOfPlayers: selectedNumOfPlayers,
                            selectedGridSize: selectedGridSize
                        }
                    })
                }} />
            </div>
        </div>
    );
}

StartMenu.defaultProps = {
    theme: 'numbers',
    numOfPlayers: 1,
    gridSize: '4x4'
}