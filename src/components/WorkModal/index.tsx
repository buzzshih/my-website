import classes from "./WorkModal.module.css";
import { Modal } from "antd";
import React, { useEffect } from "react";

interface Props {
  title: string;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
}
const WorkModal = ({ title, isModalVisible, setIsModalVisible, content }: Props) => {
  useEffect(() => {
    isModalVisible !== null || undefined;
    setIsModalVisible(isModalVisible);
    console.log(isModalVisible);
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      className={classes.root}
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      {content}
    </Modal>
  );
};
export default WorkModal;
