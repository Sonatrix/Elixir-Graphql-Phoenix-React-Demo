defmodule CommunityWeb.NewsResolver do
  alias Community.News

  def all_links(_root, args, _info) do
    links = News.list_links()
    {:ok, links}
  end

  def create_link(_root, args, _info) do
    # TODO: add detailed error message handling later
    case News.create_link(args) do
      {:ok, link} ->
        {:ok, link}

      _error ->
        {:error, "could not create link"}
    end
  end

  def find(_root, %{id: id}, _info) do
    case News.get_link!(id) do
      link ->
        {:ok, link}

      nil ->
        {:error, "this id does not exists"}
    end
  end
end
