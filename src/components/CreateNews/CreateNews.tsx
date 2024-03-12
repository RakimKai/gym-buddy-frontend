import { useMutation, useQuery } from "react-query";
import useAuth from "../../hooks/useContext";
import Button from "../Button/Button";
import { Td, Th, Tr } from "../Table";
import { NewPost, Post } from "../../types/types";
import { createPost, deletePost, getPosts } from "../../data/auth/posts";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import IconSpinner from "../Icons/IconSpinner";

const CreateNews = () => {
  const { isEmployee } = useAuth();

  const [showPost, setShowPost] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [postId, setPostId] = useState<string>();
  const [posts, setPosts] = useState<Post[] | null>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const { isLoading: isLoadingPosts } = useQuery("posts", getPosts, {
    onSuccess({ data }) {
      setPosts(data.data.posts);
    },
    onError() {},
  });

  const { mutate: newPost, isLoading: isLoadingPost } = useMutation(
    createPost,
    {
      onSuccess() {
        toast("You have successfully created a post!");
      },
      onError() {},
    }
  );
  const { mutate: removePost, isLoading: isLoadingDelete } = useMutation(
    deletePost,
    {
      onSuccess() {
        setShowDelete(false);
        toast("You have successfully deleted the post!");
      },
      onError() {},
    }
  );

  const handleClick = () => {
    const post: NewPost = {
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      created_at: new Date().toISOString(),
    };
    newPost(post);
  };
  const handlePostId = (id: string) => {
    setPostId(id);
    setShowDelete(true);
  };
  const handleDelete = () => {
    removePost(postId);
  };

  if (isLoadingPost || isLoadingPosts || isLoadingDelete) {
    return <IconSpinner />;
  }

  return (
    <>
      {isEmployee ? (
        <div className="">
          <h2 className="text-2xl text-gray-700 p-5">
            Upravljanje obavijesti:
          </h2>
          <div className="flex flex-col justify-center gap-y-4 ml-96 w-1/5">
            <div className="grid grid-cols-2 items-center w-full">
              <label>Naziv: </label>
              <input
                ref={titleRef}
                type="text"
                className="w-[155px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
                placeholder="Naziv obavijesti..."
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label>Sadržaj: </label>
              <input
                ref={contentRef}
                type="text"
                className="w-[552px] h-[80px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
                placeholder="Sadržaj obavijesti..."
              />
            </div>
            <div className="mb-10">
              <Button label={"Objavi"} onClick={() => setShowPost(true)} />
            </div>
          </div>
          {showPost && (
            <Modal onClose={() => setShowPost(false)} open={true}>
              <h2>Da li ste sigurni da želite objaviti obavijest?</h2>
              <div className="flex gap-2 justify-end pt-6">
                <Button label="Sačuvaj" onClick={() => handleClick()} />
                <Button
                  label="Zatvori"
                  variant="informative"
                  onClick={() => setShowPost(false)}
                />
              </div>
            </Modal>
          )}
          <div className="flex flex-col gap-10 overflow-y-auto h-80 w-[1200px] m-auto ">
            <table className="w-1/2 mx-auto ">
              <thead>
                <Tr>
                  <Th>Naziv obavijesti</Th>
                  <Th>Datum postavljanja</Th>
                  <Th>Ime uposlenika</Th>
                  <Th>Opcije</Th>
                </Tr>
              </thead>
              <tbody>
                {posts &&
                  posts.map((post, index) => (
                    <Tr key={index} noBorder>
                      <Td className="text-primary">{post.title}</Td>
                      <Td className="text-primary">
                        {new Date(post.created_at).toLocaleDateString()}
                      </Td>
                      <Td className="text-primary">{post.user?.name}</Td>
                      <Td className="text-primary flex gap-x-4">
                        <h5
                          className="cursor-pointer hover:text-red-400"
                          onClick={() => handlePostId(post.id)}
                        >
                          Ukloni
                        </h5>
                      </Td>
                    </Tr>
                  ))}
              </tbody>
            </table>
          </div>
          {showDelete && (
            <Modal onClose={() => setShowDelete(false)} open={true}>
              <h2>Da li ste sigurni da želite obrisati obavijest?</h2>
              <div className="flex gap-2 justify-end pt-6">
                <Button
                  label="Sačuvaj"
                  variant="danger"
                  onClick={() => handleDelete()}
                />
                <Button
                  label="Zatvori"
                  variant="informative"
                  onClick={() => setShowDelete(false)}
                />
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <h1 className="p-20">Not authorized..</h1>
      )}
    </>
  );
};

export default CreateNews;
