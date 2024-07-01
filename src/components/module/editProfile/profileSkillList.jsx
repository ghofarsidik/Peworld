/* eslint-disable react/prop-types */

import { useState } from 'react';
import Input from '../../base/Input';
import Button from '../../base/Button';
import Skillblock from '../../base/Skillblock';
import ConfirmDialog from '../../base/ConfirmDialog'; // Import ConfirmDialog

const ProfileSkillList = ({ skills, onAddSkill, handleDelete }) => {
  const [newSkill, setNewSkill] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // State untuk menampilkan dialog konfirmasi
  const [deleteSkillId, setDeleteSkillId] = useState(null); // State untuk menyimpan id skill yang akan dihapus

  const handleChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      onAddSkill(newSkill);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = () => {
    handleDelete(deleteSkillId);
    setShowConfirmDialog(false); // Tutup dialog konfirmasi setelah menghapus
  };

  const handleDeleteClick = (skillId) => {
    setDeleteSkillId(skillId);
    setShowConfirmDialog(true); // Tampilkan dialog konfirmasi
  };

  return (
    <div className="w-full md:max-w-[754px] h-fit rounded bg-white flex flex-col p-[30px] mx-auto mt-8">
      <div>
        <div className="flex space-x-8 mb-3 border-b border-abu-pj">
          <div className="text-[22px] font-semibold py-1">Skill</div>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            divClassName="flex-grow"
            labelClassName="mt-0"
            label=""
            name="skill"
            onChange={handleChange}
            type="text"
            value={newSkill}
            placeholder="Masukkan skill"
          />
          <Button className="px-4 mb-5" label="Tambah Skill" onClick={handleAddSkill}></Button>
        </div>
      </div>
      <div className='flex flex-wrap space-x-2'>
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <Skillblock key={index} skill_id={skill.id} handleDelete={() => handleDeleteClick(skill.id)}>{skill.skill_name}</Skillblock>
          ))
        ) : (
          <Skillblock>Belum ada skill</Skillblock>
        )}
      </div>

      {showConfirmDialog && (
        <ConfirmDialog
          message="Yakin ingin menghapus skill ini?"
          onConfirm={handleDeleteSkill}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}
    </div>
  );
};

export default ProfileSkillList;
