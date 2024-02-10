import React, { useState } from 'react'
import { Textarea } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useDisclosure } from '@nextui-org/react';

const TextForm = (props) => {
  const handleonUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleonUpperone = () => {
    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext)
  }
  const handleonLower = () => {
    let newtext = text.toLowerCase()
    setText(newtext);
  }
  const handleonClear = () => {
    setText('')
  }
  const handleonRemovespace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  const handleOnchangeform = (event) => {
    setFrom(event.target.value)
  }
  const handleOnchangeto = (event) => {
    setTo(event.target.value)
  }
  const handlenOnReplace = () => {
    let newText = text.replaceAll(from, to);
    setText(newText)
  }
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [text, setText] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className='flex flex-wrap laptop:inline-grid laptop:grid-cols-3 gap-4 justify-items-center items-center' >
        <Button color="primary" type="Button" className="border-2 p-2" onClick={handleonUpper}>ABC</Button>
        <Button color="primary" type="Button" className="border-2 p-2" onClick={handleonUpperone}>Abc</Button>
        <Button color="primary" type="Button" className="border-2 p-2" onClick={handleonLower}>abc</Button>
        <Button color="primary" type="Button" className="border-2 p-2" onClick={handleonClear}>Clear</Button>
        <Button color="primary" className="border-2 p-2" onPress={onOpen}>Relpace All</Button>
        <Button color="primary" type="Button" className="border-2 p-2" onClick={handleonRemovespace}>Remove ExtraSpace</Button>
        <Button color="primary" type="Button" className="border-2 p-2" onClick={props.togglemode}>{props.mode}</Button>
        <Modal className="bg-default-600" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent >
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Replace All</ModalHeader>
                <ModalBody >
                  <input placeholder="Find" className="Input rounded-lg p-2" onChange={handleOnchangeform} id="from" />
                  <input placeholder="Replace" className="Input rounded-lg p-2" onChange={handleOnchangeto} id="to" />
                </ModalBody>
                <ModalFooter>
                  <Button onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onClick={handlenOnReplace} onPress={onClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <Textarea
        size="lg"
        label="Textarea"
        color="default"
        labelPlacement="inside"
        placeholder="Please Enter Your Text"
        className="text-black w-full py-4" value={text} onChange={handleOnchange} id='myarea' minRows={38} maxRows={50} required
      />
    </div>
  )
}

export default TextForm
