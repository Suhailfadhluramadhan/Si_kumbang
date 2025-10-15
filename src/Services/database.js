import {
  doc,
  setDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../config/firebase";

export const saveUserToFirestore = async (uid, name, email) => {
  await setDoc(doc(db, "users", uid), {
    name,
    email,
    createdAt: new Date(),
  });
};

export const addChildForUser = async (userUid, childData) => {
  const childrenColRef = collection(db, "users", userUid, "children");
  const newChildDocRef = doc(childrenColRef);

  // Hitung umur dalam bulan
  const calculateAgeInMonths = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    return (
      (today.getFullYear() - birth.getFullYear()) * 12 +
      (today.getMonth() - birth.getMonth())
    );
  };

  const ageInMonths = calculateAgeInMonths(childData.birthDate);

  // Struktur development bertingkat berdasarkan range umur
  const developments = {
    // 12-17 bulan (q1-q8)
    "12-17": {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
    },
    // 18-23 bulan (q9-q16)
    "18-23": {
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      q13: false,
      q14: false,
      q15: false,
      q16: false,
    },
    // 24-36 bulan (q17-q26)
    "24-36": {
      q17: false,
      q18: false,
      q19: false,
      q20: false,
      q21: false,
      q22: false,
      q23: false,
      q24: false,
      q25: false,
      q26: false,
    },
  };

  // Struktur imunisasi - gabung semua tanpa kategori umur
  const immunizations = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
  };

  console.log(childData);
  await setDoc(newChildDocRef, {
    ...childData,
    createdAt: new Date(),
    ageCategory: ageInMonths < 24 ? "below2years" : "above2years",
    immunizations,
    developments, // Struktur bertingkat
    lastDevelopmentUpdate: null,
  });

  return newChildDocRef.id;
};

export const getChildrenForUser = async (userUid) => {
  const childrenColRef = collection(db, "users", userUid, "children");
  const snapshot = await getDocs(childrenColRef);
  const children = snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
  return children;
};

export const getName = async (uid) => {
  const nameRef = doc(db, "users", uid);
  const snapshot = await getDoc(nameRef);
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    return "user";
  }
};

export const editProfile = async (uid, data) => {
  try {
    const nameRef = doc(db, "users", uid);
    await updateDoc(nameRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const getChildById = async (userUid, childId) => {
  const childDocRef = doc(db, "users", userUid, "children", childId);
  const snapshot = await getDoc(childDocRef);

  if (!snapshot.exists()) {
    throw new Error("Data anak tidak ditemukan");
  }

  return { id: snapshot.id, ...snapshot.data() };
};

// Update development berdasarkan range umur dan key
export const updateChildDevelopment = async (
  userUid,
  childId,
  ageRange,
  key,
  value
) => {
  try {
    const childDocRef = doc(db, "users", userUid, "children", childId);
    await updateDoc(childDocRef, {
      [`developments.${ageRange}.${key}`]: value,
      lastDevelopmentUpdate: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error("Error updating development:", error);
    throw error;
  }
};

export const updateChildImmunization = async (
  userId,
  childId,
  vaccineKey,
  value
) => {
  try {
    const childDocRef = doc(db, "users", userId, "children", childId);

    await updateDoc(childDocRef, {
      [`immunizations.${vaccineKey}`]: value,
    });

    console.log("Berhasil update status imunisasi");
  } catch (error) {
    console.error("Gagal update status imunisasi:", error);
    throw error;
  }
};

export const deleteChild = async (userUid, childId) => {
  try {
    const childDocRef = doc(db, "users", userUid, "children", childId);
    await deleteDoc(childDocRef);
    console.log("Child deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting child:", error);
    throw error;
  }
};


export const updateChildData = async (userUid, childId, updateData) => {
  try {
    const childDocRef = doc(db, "users", userUid, "children", childId);
    
    // Hitung ulang ageCategory jika birthDate diupdate
    if (updateData.birthDate) {
      const calculateAgeInMonths = (birthDate) => {
        const birth = new Date(birthDate);
        const today = new Date();
        return (
          (today.getFullYear() - birth.getFullYear()) * 12 +
          (today.getMonth() - birth.getMonth())
        );
      };
      
      const ageInMonths = calculateAgeInMonths(updateData.birthDate);
      updateData.ageCategory = ageInMonths < 24 ? "below2years" : "above2years";
    }
    
    await updateDoc(childDocRef, {
      ...updateData,
      updatedAt: new Date(),
    });
    
    console.log("Child data updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating child data:", error);
    throw error;
  }
};