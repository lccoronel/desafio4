import { FormEvent, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FoodProps } from '../../pages/Dashboard';

interface ModalAddFoodProps {
  setIsOpen: () => void;
  handleAddFood: (food: FoodProps) => void;
  isOpen: boolean
}

const ModalAddFood: React.FC<ModalAddFoodProps> = ({ setIsOpen, handleAddFood, isOpen }) => {
  const formRef = useRef<any>(null);

  const handleSubmit = async (e: FormEvent) => {
    const food: FoodProps = {
      id: 10,
      name: 'teste',
      description: 'testando',
      price: '100',
      image: ''
    };

    handleAddFood(food);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
